// lib/checkUser.js
import { currentUser } from "@clerk/nextjs/server";
import { db } from "./prisma";

export const checkUser = async () => {
  try {
    const user = await currentUser();
    if (!user) return null;

    const loggedInUser = await db.user.findUnique({
      where: { clerkUserId: user.id },
    });
    if (loggedInUser) return loggedInUser;

    const firstName = user.firstName ?? "";
    const lastName = user.lastName ?? "";
    const name = `${firstName} ${lastName}`.trim() || "No name";
    const email =
      (user.emailAddresses && user.emailAddresses[0]?.emailAddress) ?? null;

    const newUser = await db.user.create({
      data: {
        clerkUserId: user.id,
        name,
        imageUrl: user.imageUrl ?? null,
        email,
      },
    });

    return newUser;
  } catch (err) {
    console.error("checkUser error:", err?.message ?? err);
    return null;
  }
};
