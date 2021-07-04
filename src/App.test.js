import { render, screen } from "@testing-library/react";
import App from "./App";

import { mount, shallow } from "enzyme";
import Counter from "./Counter";

//shallow is a function from enzyme which creates an instance of the component. shallow will not render the children component
// describe section to combine the related tests.
describe("Counter Testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Counter />);
    // wrapper = mount(<App />);
    console.log(wrapper.debug());
  });
  test("render the title of the counter", () => {
    expect(wrapper.find("h1").text()).toContain("This is counter app");
    console.log(wrapper.debug());
    // render(<App />);
    //const linkElement = screen.getByText("This is counter app");
    //expect(linkElement).toBeInTheDocument();
  });

  test("render a button with test of `increment`", () => {
    expect(wrapper.find("#increment-btn").text()).toBe("increment");
  });

  test("render the initial value of state in a div", () => {
    expect(wrapper.find("#counter-val").text()).toBe("0");
  });

  test("render the click event of increment button and increment value", () => {
    wrapper.find("#increment-btn").simulate("click");
    expect(wrapper.find("#counter-val").text()).toBe("1");
  });

  test("render a button with test of `decrement`", () => {
    expect(wrapper.find("#decrement-btn").text()).toBe("decrement");
  });

  test("render the click event of decrement button and decrement value", () => {
    wrapper.find("#increment-btn").simulate("click");
    expect(wrapper.find("#counter-val").text()).toBe("1");
    wrapper.find("#decrement-btn").simulate("click");
    expect(wrapper.find("#counter-val").text()).toBe("0");
  });
});
