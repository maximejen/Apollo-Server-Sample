export const typeDef = `
	type Project {
		id: String
		name: String
		description: TranslatedString
#		technologies: [Technology]
	}
`;

export const projects = [
	{
		id: "juidaozdpaozDAZDAZdpiazd",
		name: "My Paint",
		description: {
			en: "A Web@cademy project",
			fr: "Un projet de la Web@cadémie"
		},
	}
];

export const resolvers = {
	Project: {}
};