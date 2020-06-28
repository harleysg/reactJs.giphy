import React from "react";
import { render, waitForElement, fireEvent, screen } from "@testing-library/react";
import HomePage from "../pages/home/index.js";
// import App from '../App';

test('Search form and navigate as expected', async () => {
    const { container } = render(<HomePage />)
    const input = await screen.findByRole("searchbox")
    fireEvent.change(input, { target: { value: "Matrix" } })
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" })
    const gifLink = await waitForElement(
        () => container.querySelector('.gif-searched')
    )
    // const linkElement = await findByText(/Matrix/i);
    console.log(`linkElement`, gifLink.className)
    
    expect(gifLink).toBeInTheDocument();
})