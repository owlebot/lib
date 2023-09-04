/**
 * @typedef {Object} ResolveObject
 * @property {Function} resolve
 * @property {Function} def
 */

//
// COMMUNITIES
//

/**
 * @typedef {Object} StatsMembersObject
 * @property {Function} resolve
 * @property {Function} def
 * @property {ResolveObject} _
 */

//
// COMMUNITY
//

/**
 * @typedef {Object} XpReadCommunityObject
 * @property {Function} resolve
 * @property {Function} def
 * @property {Function} router
 * @property {ResolveObject} LAST
 */

//
// MEMBER
//

/**
 * @typedef {Object} XpReadMemberObject
 * @property {Function} resolve
 * @property {Function} def
 * @property {Function} router
 * @property {ResolveObject} LAST
 */

//
// USER
//

/**
 * @typedef {Object} XpReadUserObject
 * @property {Function} resolve
 * @property {Function} def
 * @property {Function} router
 * @property {ResolveObject} LAST
 */

//
// ROOT
//

/**
 * @typedef {Object} XpReadObject
 * @property {Function} resolve
 * @property {Function} def
 * @property {XpReadCommunityObject} COMMUNITY
 * @property {XpReadMemberObject} MEMBER
 * @property {XpReadUserObject} USER
 */

export const XP_READ = {
	resolve: "/",
	COMMUNITY: {
		resolve: "community/",
		router: true,
		LAST: {
			resolve: "last/",
		},
	},
	MEMBER: {
		resolve: "member/",
		router: true,
		LAST: {
			resolve: "last/",
		},
	},
	USER: {
		resolve: "user/",
		router: true,
		LAST: {
			resolve: "last/",
		},
	},
};
