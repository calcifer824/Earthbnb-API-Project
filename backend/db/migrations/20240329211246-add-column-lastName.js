"use strict";

/** @type {import('sequelize-cli').Migration} */

let options = {};
if (process.env.NODE_ENV === "production") {
	options.schema = process.env.SCHEMA;
}
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.addColumn("Users", "lastName", {
			type: Sequelize.STRING(30),
			allowNull: false,
		});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.removeColumn("Users", "lastName");
	},
};
