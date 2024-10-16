import { render, screen } from "@testing-library/react";
import Navbar from "../Navbar";

describe("Navbar component", () => {
  it("renders the Navbar title", () => {
    render(<Navbar />);
    const titleElement = screen.getByText(/BitGuardian/i);
    expect(titleElement).toBeInTheDocument();
  });
});
