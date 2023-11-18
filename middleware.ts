import {withAuth, NextRequestWithAuth} from "next-auth/middleware"
import {NextResponse} from "next/server";

export default withAuth(
    function middleware(request: NextRequestWithAuth) {

        if (request.nextUrl.pathname.startsWith("/dashboard")
        && request.nextauth.token?.roles.includes(String(process.env.DISCORD_DASHBOARD_ROLE)) === false) {
            return NextResponse.rewrite(
                new URL("/api/auth/denied", request.url)
            )
        }
    },
    {
        callbacks: {
            authorized: ({token}) => !!token
        },
    }
)

export const config = {
    matcher: ["/dashboard"]
}