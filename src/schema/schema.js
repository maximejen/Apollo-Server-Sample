import {makeExecutableSchema} from "graphql-tools";

import { merge } from 'lodash';

import { typeDef as Project, resolvers as projectResolvers, projects } from './project.js';
import { typeDef as Technology, resolvers as technologyResolvers, technologies } from './technology.js';
import { typeDef as TranslatedString, resolvers as translatedStringResolvers } from './translatedString';

// Query part
const Query = `
	type Query {
		projects: [Project]
		technologies: [Technology]
	}
`;

const queryResolvers = {
	Query: {
		projects: () => {
			return projects;
		},
		technologies: () => {
			return technologies;
		},
	}
};

// Mutations part
const Mutation = `
	type Mutation {
	addTechnology(name: String!): Technology
}
`;

function generateId() {
	return require('crypto').randomBytes(10).toString('hex');
}

const mutationResolvers = {
	Mutation: {
		addTechnology: (root, args) => {
			let id = generateId();

			const newTechnology = { id: id, name: args.name };
			console.log(newTechnology);
			technologies.push(newTechnology);
			return newTechnology;
		},
	},
};

export const schema = makeExecutableSchema({
	typeDefs: [
		Query,
		Mutation,
		Project,
		Technology,
		TranslatedString
	],
	resolvers: merge(queryResolvers,
		mutationResolvers,
		projectResolvers,
		technologyResolvers,
		translatedStringResolvers
	),
});