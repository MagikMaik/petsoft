"use server";

import prisma from "@/lib/db";
import { sleep } from "@/lib/utils";
import { revalidatePath } from "next/cache";

// server actions que se usan para reemplazar handle functions//
export async function addPet(formData) {
  await sleep(2000);
  // try catch for database errors//
  try {
    await prisma.pet.create({
      data: {
        name: formData.get("name"),
        ownerName: formData.get("ownerName"),
      /*  imageUrl:
          formData.get("imageUrl") ||
          "https://bytegrad.com/course-assets/react-nextjs/pet-placeholder.png",*/
        age: parseInt(formData.get("age")),
        notes: formData.get("notes"),
      },
    });
  } catch (error) {
    return {
      message: "There was an error adding the pet",
    };
  }
  // re renderiza la pagina//
  revalidatePath("/app", "layout");
}
