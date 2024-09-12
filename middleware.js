import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ['/dashboard', '/'], // Add all public routes here
  ignoredRoutes: ["/((?!api|trpc))(_next.*|.+\\.[\\w]+$)"] // Skip static file routes
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"], // Correct the matcher pattern
};