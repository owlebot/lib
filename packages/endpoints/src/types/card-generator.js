/**
 * @typedef {Object} ResolveObject
 * @property {Function} resolve
 * @property {Function} def
 */

//
// COMMUNITIES
//

/**
 * @typedef {Object} CardGeneratorMemberCommunityObject
 * @property {Function} resolve
 * @property {Function} def
 * @property {ResolveObject} PROFILE
 */

/**
 * @typedef {Object} CardGeneratorCommunityObject
 * @property {Function} resolve
 * @property {Function} def
 * @property {Function} router
 * @property {ResolveObject} PROFILE
 * @property {CardGeneratorMemberCommunityObject} MEMBER
 */

//
// USERS
//

/**
 * @typedef {Object} CardGeneratorUserObject
 * @property {Function} resolve
 * @property {Function} def
 * @property {Function} router
 * @property {ResolveObject} PROFILE
 */

//
// ROOT
//

/**
 * @typedef {Object} CardGeneratorObject
 * @property {Function} resolve
 * @property {Function} def
 * @property {CardGeneratorCommunityObject} COMMUNITY
 * @property {CardGeneratorUserObject} USER
 */

export const CARD_GENERATOR = {
	resolve: "/",
	COMMUNITY: {
		resolve: "community/",
		router: true,
		PROFILE: {
			resolve: "profile/",
		},
		MEMBER: {
			resolve: "member/",
			PROFILE: {
				resolve: "profile/",
			},
		},
	},
	USER: {
		resolve: "user/",
		router: true,
		PROFILE: {
			resolve: "profile/",
		},
	},
};
