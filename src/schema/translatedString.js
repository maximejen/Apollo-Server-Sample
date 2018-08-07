export const typeDef = `
	type TranslatedString {
		en: String
		fr: String
	}
`;

export const resolvers = {
	TranslatedString: {
		en: () => 'en',
		fr: () => 'fr'
	}
};