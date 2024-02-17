import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ['/api/webhooks/clerck']
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};