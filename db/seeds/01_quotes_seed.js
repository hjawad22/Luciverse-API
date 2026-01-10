/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('quotes').del()
  await knex('quotes').insert([
    { quote: "What is it that you truly want?", character: "Lucifer" },
    { quote: "You’re alive, so you matter.", character: "Chloe" },
    { quote: "I’m what’s wrong with the world.", character: "Lucifer" },
    { quote: "Sometimes it’s better to lie.", character: "Mazikeen" },
    { quote: "God is a good boss… sometimes.", character: "Lucifer" },
    { quote: "Everyone deserves a second chance.", character: "Amenadiel" },
    { quote: "I like to play by my own rules.", character: "Lucifer" },
    { quote: "Life is complicated, but love is simple.", character: "Chloe" },
    { quote: "Evil is relative.", character: "Lucifer" },
    { quote: "Humans are fascinating creatures.", character: "Lucifer" },
  ]);
};
