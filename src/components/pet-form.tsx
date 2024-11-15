"use client";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import usePetContext from "@/lib/hooks";
import { addPet } from "@/actions/actions";
import PetFormBtn from "./pet-form-btn";
import { toast } from "sonner";

type actionTypeProps = {
  actionType: "add" | "edit";
  onFormSubmission: () => void;
};
export default function PetForm({
  actionType,
  onFormSubmission,
}: actionTypeProps) {
  const { selectedPet } = usePetContext();

  return (
    <form
      action={async (formData) => {
       const error = await addPet(formData);
        if (error) {
          toast.warning(error.message);
          return;
        }
        onFormSubmission();
      }}
      className="flex flex-col"
    >
      <div className="space-y-3">
        <div className="space-y-1">
          <Label htmlFor="name">Name</Label>
          <Input
            required
            name="name"
            id="name"
            type="text"
            defaultValue={actionType === "edit" ? `${selectedPet?.name}` : ""}
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="ownerName">Owner Name</Label>
          <Input
            required
            name="ownerName"
            id="ownerName"
            type="text"
            defaultValue={
              actionType === "edit" ? `${selectedPet?.ownerName}` : ""
            }
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="imageUrl">Image Url</Label>
          <Input
            name="imageUrl"
            id="imageUrl"
            type="text"
            defaultValue={
              actionType === "edit" ? `${selectedPet?.imageUrl}` : ""
            }
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="age">Age</Label>
          <Input
            required
            name="age"
            id="age"
            type="text"
            defaultValue={actionType === "edit" ? `${selectedPet?.age}` : ""}
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="notes">Notes</Label>
          <Textarea
            required
            name="notes"
            id="notes"
            rows={3}
            defaultValue={actionType === "edit" ? `${selectedPet?.notes}` : ""}
          />
        </div>
      </div>
     <PetFormBtn actionType={actionType} />
    </form>
  );
}
