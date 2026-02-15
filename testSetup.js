// Test setup for NutriCoach application
// This file sets up the database and initializes sample data for testing

import { initializeNutrients } from './src/utils/nutrientService';
import { addIngredient } from './src/utils/ingredientService';
import db from './src/data/db';

// Initialize the database with sample data for testing
export const initializeTestData = async () => {
  try {
    // Initialize nutrients database
    await initializeNutrients();
    
    // Add sample ingredients
    await addSampleIngredients();
    
    console.log('Test data initialized successfully');
  } catch (error) {
    console.error('Error initializing test data:', error);
  }
};

// Add sample ingredients for testing
const addSampleIngredients = async () => {
  const sampleIngredients = [
    { name: 'Spinach', category: 'vegetables', quantity: 200, unit: 'g', expiryDate: new Date(Date.now() + 7*24*60*60*1000) },
    { name: 'Chicken Breast', category: 'proteins', quantity: 500, unit: 'g', expiryDate: new Date(Date.now() + 3*24*60*60*1000) },
    { name: 'Carrots', category: 'vegetables', quantity: 300, unit: 'g', expiryDate: new Date(Date.now() + 10*24*60*60*1000) },
    { name: 'Broccoli', category: 'vegetables', quantity: 400, unit: 'g', expiryDate: new Date(Date.now() + 5*24*60*60*1000) },
    { name: 'Oats', category: 'grains', quantity: 500, unit: 'g', expiryDate: new Date(Date.now() + 30*24*60*60*1000) },
    { name: 'Blueberries', category: 'fruits', quantity: 250, unit: 'g', expiryDate: new Date(Date.now() + 5*24*60*60*1000) },
    { name: 'Almonds', category: 'fats', quantity: 150, unit: 'g', expiryDate: new Date(Date.now() + 60*24*60*60*1000) },
    { name: 'Salmon Fillet', category: 'proteins', quantity: 300, unit: 'g', expiryDate: new Date(Date.now() + 2*24*60*60*1000) }
  ];
  
  for (const ingredient of sampleIngredients) {
    await addIngredient(ingredient);
  }
};

// Run initialization when module is loaded
initializeTestData();