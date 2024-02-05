import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

function popupVideo() {
  Fancybox.bind("[data-fancybox]", {
    Escape: "close",
  });
}

export default popupVideo;
