import React from "react";
import { Button } from "./ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import PetForm from "./pet-form";

type PetButtonProps = {
  actionType: "add" | "edit" | "checkout";
  children?: React.ReactNode;
  onClick?: () => void;
};
export default function PetButton({
  actionType,
  children,
  onClick,
}: PetButtonProps) {
  if (actionType === "checkout") {
    return (
      <Button onClick={onClick} variant="secondary">
        {children}
      </Button>
    );
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        {actionType === "add" ? (
          <Button size="icon">
            <PlusIcon className="w-6 h-6" />
          </Button>
        ) : (
          <Button onClick={onClick} variant="secondary">
            {children}
          </Button>
        )}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {actionType === "add" ? "Add a new pet" : "Edit pet"}
          </DialogTitle>
        </DialogHeader>

        <PetForm />
      </DialogContent>
    </Dialog>
  );
}
