import { NextResponse } from "next/server";
import { auth, clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";


const isProtectedRoute = createRouteMatcher([
    '/',
  ]);
export default clerkMiddleware((auth, request)=>{
if(isProtectedRoute(request)){
    auth().protect();
}
return NextResponse.next();
});


export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};