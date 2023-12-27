import SignUpForm from "@/app/signup/signup_form";
import Page from "@/app/signup/page";

describe("signup.cy.js", () => {
	it("mounts", () => {
		cy.mount(<Page />);
		cy.get("h1").should("contains.text", "Signup");
	});

	it("mounts", () => {
		cy.mount(<SignUpForm />);
	});
});
