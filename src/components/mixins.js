export const InteractiveModule = {
  name: "InteractiveModule",

  data() {
    return {
      name: null,
      description: null
    };
  },

  mounted() {
    if (!this.name) {
      throw new Error("component name not specified");
    }

    if (!this.description) {
      throw new Error("component description not specified");
    }
  }
};

export const GGBInteractiveModule = {
  name: "GGBInteractiveModule",

  mixins: [InteractiveModule],

  data() {
    return {
      applet: null
    };
  },
  /**
   * adds GeoGebra on component load
   */
  async mounted() {
    // if the GeoGebra script is not loaded wait for loading
    await this.$loadScript("https://cdn.geogebra.org/apps/deployggb.js");

    // this.getParameters() will be called from the component
    this.applet = new GGBApplet("6.0", this.getGGBParameters());

    this.applet.inject(this.name);
  }
};
