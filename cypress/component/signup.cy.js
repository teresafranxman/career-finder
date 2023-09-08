import SignUpForm from "@/app/signup/form";

describe("signup.cy.js", () => {
	it("mounts", () => {
		cy.mount(<SignUpForm />)
	});
});
