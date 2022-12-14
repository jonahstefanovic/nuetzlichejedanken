import { mount } from "@vue/test-utils";

import MainNav from "@/components/Heading.vue";

describe("MainNav", () => {
  it("displays company name", () => {
    const wrapper = mount(MainNav);
    expect(wrapper.text()).toMatch("Bobo Careers");
  });
});
