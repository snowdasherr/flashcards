// script.js

const form = document.getElementById('flashcard-form');
const flashcardsContainer = document.getElementById('flashcards');

const filterCategoryInput = document.getElementById('filter-category');
const filterDifficultySelect = document.getElementById('filter-difficulty');
const clearsFilterButton = document.getElementById('clear-filters');

// In-memory list of flashcards
const flashcards = [];
