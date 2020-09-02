<template>
  <div>
    <div>
      <div :id="name"></div>
    </div>
  </div>
</template>

<script>
import { GGBInteractiveModule } from "./mixins";

export default {
  name: "Lines",
  mixins: [GGBInteractiveModule],
  data() {
    return {
      name: "line",
      description: "Взаимное расположение прямых в пространстве"
    };
  },
  methods: {
    getGGBParameters() {
      const parameters = {
        appName: "classic",
        material_id: "17499",
        id: this.name + "-applet",

        width: 310,
        // height: 425,
        borderColor: "#ffffff",

        showToolBar: false,
        showMenuBar: false,
        showAlgebraInput: false,
        showStyleBar: false,
        showNavigationBar: false,
        showToolBarHelp: false,

        showResetIcon: true,

        enableLabelDrags: false,
        enableShiftDragZoom: true,
        enableRightClick: false,
        capturingThreshold: 3,

        errorDialogsActive: true,
        useBrowserForJS: false,
        playButton: true,
        showFullscreenButton: true,
        showAnimationButton: true,
        autoHeight: true
      };
      parameters.appletOnLoad = () => {
        // alert("Загрузка завершена");
      };
      return parameters;
    }
  }
};
</script>

<style scoped>
#name {
  margin-left: auto;
  margin-right: auto;
}
</style>
