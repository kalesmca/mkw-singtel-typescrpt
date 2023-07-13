import React from "react";
import { screen, cleanup, render } from "@testing-library/react";
import DashboardComponent from "./dashboardComponent";

// @testing-library/react -> DOM testing
// react-test-renderer -> snapshot testing

afterEach(() => {
  cleanup();
});

describe("MyCompnent", () => {
  test("should display label", () => {
    render(<DashboardComponent />);
    expect(screen.getByTestId("dashboard-testId")).toBeInTheDocument();
  });
});
