import type { NextAuthOptions } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

// https://discord.com/developers/docs/topics/oauth2#shared-resources-oauth2-scopes
const scopes = ["identify", "guilds"].join(" ")

export const options: NextAuthOptions = {
    providers: [
        DiscordProvider({
            clientId: process.env.DISCORD_CLIENT_ID as string,
            clientSecret: process.env.DISCORD_CLIENT_SECRET as string,

            authorization: {
                params: { scope: scopes.concat(" guilds.members.read") },
            },

            async profile(profile, tokens) {
                let memberData = {roles: []}

                // Fetch the list of servers the user is a member of
                const response = await fetch(
                    "https://discord.com/api/users/@me/guilds",
                    {
                        headers: {
                            Authorization: `Bearer ${tokens.access_token}`,
                        },
                    }
                )

                const guilds = await response.json()

                // Check if the user is a member of the target server
                const targetGuild = guilds.find(
                    (guild: any) => guild.id === process.env.DISCORD_SERVER_ID
                )

                if (targetGuild) {
                    // Fetch the member data from our auth server
                    const memberResponse = await fetch(
                        `https://discord.com/api/users/@me/guilds/${process.env.DISCORD_SERVER_ID}/member`,
                        {
                            headers: {
                                Authorization: `Bearer ${tokens.access_token}`,
                            },
                        }
                    )

                    memberData = await memberResponse.json()

                }

                return {
                    ...profile,
                    roles: memberData.roles,
                    image: `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.png`,
                }
            },
        })
    ],
    callbacks: {
        async jwt({token, user}){
            if (user) token.roles = user.roles
            return token
        },
        async session({session, token}){
            if (session?.user) session.user.roles = token.roles
            return session
        }
    },
    theme: {
        colorScheme: "dark",
        brandColor: "#34b4f4",
        logo: "/images/logo_lettering.png"
    }
}