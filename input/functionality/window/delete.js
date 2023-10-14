import { displayList } from "../display/itemsOrLists";
import { closePopUp } from "./openWindow";

export function deleteProduct() {
  let indexForCurrentItem = Number(selectedIndex);
  let currentListArray = currentList.array;
  currentListArray.splice(indexForCurrentItem, 1);
  displayList();
  closePopUp();
}
