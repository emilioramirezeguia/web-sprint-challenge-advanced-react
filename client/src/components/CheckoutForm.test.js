import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  // Render component
  render(<CheckoutForm />);

  // Grab h2 with "checkout form" text
  const header = screen.getByText(/checkout form/i);

  // Confirm it's displaying on screen
  expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
  // Render component
  render(<CheckoutForm />);

  // Grab text inputs
  const firstName = screen.getByLabelText(/first name/i);
  const lastName = screen.getByLabelText(/last name/i);
  const address = screen.getByLabelText(/address/i);
  const city = screen.getByLabelText(/city/i);
  const state = screen.getByLabelText(/state/i);
  const zip = screen.getByLabelText(/zip/i);

  // Fire change events for text inputs
  fireEvent.change(firstName, { target: { value: "Emilio" } });
  fireEvent.change(lastName, { target: { value: "Ramirez" } });
  fireEvent.change(address, { target: { value: "The Beach" } });
  fireEvent.change(city, { target: { value: "Rosarito" } });
  fireEvent.change(state, { target: { value: "Baja Mexico" } });
  fireEvent.change(zip, { target: { value: "21240" } });

  // Grab checkout button
  const checkOutButton = screen.getByRole("button", /checkout/i);
  // Fire submit event for checkout button
  fireEvent.submit(checkOutButton);

  // Grab successMessage div
  const successMessage = screen.getByTestId("successMessage");
  // Confirm successMessage div displays after submission
  expect(successMessage).toBeInTheDocument();
  // Confirm the right info is displaying in that message
  expect(firstName.value).toBe("Emilio");
  expect(lastName.value).toBe("Ramirez");
  expect(address.value).toBe("The Beach");
  expect(city.value).toBe("Rosarito");
  expect(state.value).toBe("Baja Mexico");
  expect(zip.value).toBe("21240");
});
