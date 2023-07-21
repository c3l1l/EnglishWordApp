using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EnglishWordApp.Migrations
{
    public partial class initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Scores",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Point = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    LastScoreDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Scores", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Words",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Expression = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Definition = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Words", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Surname = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Role = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ScoreId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Users_Scores_ScoreId",
                        column: x => x.ScoreId,
                        principalTable: "Scores",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "Examples",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Statement = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    WordId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Examples", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Examples_Words_WordId",
                        column: x => x.WordId,
                        principalTable: "Words",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Words",
                columns: new[] { "Id", "Definition", "Expression" },
                values: new object[] { 1, "To make something clear or easy to understand by describing..", "Explanation" });

            migrationBuilder.InsertData(
                table: "Words",
                columns: new[] { "Id", "Definition", "Expression" },
                values: new object[] { 2, "To make arrangements for something to happen", "Organize" });

            migrationBuilder.InsertData(
                table: "Words",
                columns: new[] { "Id", "Definition", "Expression" },
                values: new object[] { 3, "lying at an angle to the horizontal so that some points on it are higher than others..", "Sloping" });

            migrationBuilder.InsertData(
                table: "Examples",
                columns: new[] { "Id", "Statement", "WordId" },
                values: new object[,]
                {
                    { 1, "Could you give me a quick explanation of how it works?", 1 },
                    { 2, "What was her explanation for why she was late?", 1 },
                    { 3, "They organized a meeting between the teachers and students.", 2 },
                    { 4, "The bedroom is in the attic so it has a sloping ceiling.", 3 }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Examples_WordId",
                table: "Examples",
                column: "WordId");

            migrationBuilder.CreateIndex(
                name: "IX_Users_ScoreId",
                table: "Users",
                column: "ScoreId",
                unique: true,
                filter: "[ScoreId] IS NOT NULL");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Examples");

            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.DropTable(
                name: "Words");

            migrationBuilder.DropTable(
                name: "Scores");
        }
    }
}
