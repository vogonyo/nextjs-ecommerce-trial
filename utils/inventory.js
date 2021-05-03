import { v4 as uuid } from 'uuid'

let inventory = [
  {
    categories: ['new arrivals'], name: 'Urine Containers', price: '10.00', image: '/products/Urine_container_60_ml-removebg-preview.png', description: 'Urine Container 60ml ', currentInventory: 4 },
  {
    categories: ['new arrivals'], name: 'Stool Container', price: '11.50', image: '/products/stool-container-removebg-preview.png', description: 'Stool container with spoon 60ml at 11.50 each' , currentInventory: 2 },
  {
    categories: ['new arrivals', 'sutures'], name: 'Sputum Container', price: '8.50', image: '/products/sputum-container-removebg-preview.png', description: 'Sputum containers 40ml  at 8.50each', currentInventory: 8 },
  {
    categories: ['new arrivals', 'pippete'], name: 'Micro pippette tips', price: '650', image: '/products/Micropipette_tips__10_ul-removebg-preview.png', description: '1000pcs at 650' , currentInventory: 10},
  {
    categories: ['on sale'], name: 'plastic petri dish', price: '15.00', image: '/products/Plastic_petri_dish-removebg-preview.png', description: 'Sterile plastic petri dish, 90 X 15mm at 15.00 each', currentInventory: 7 },
  {
    categories: ['on sale'], name: 'Urine Bag', price: '500', image: '/products/Urine_Bag-removebg-preview.png', description: '' ,  currentInventory: 13},
  {
    categories: ['on sale', 'pippete'], name: 'PCR Tubes', price: '1500', image: '/products/PCR_tubes_0.2_ml-removebg-preview.png', description: 'PCR Tubes with cap 0.2 ml , 1000pcs at 1500' , currentInventory: 10},
  {
    categories: ['on sale', 'sutures'], name: 'Nylon suture with needle', price: '650', image: '/products/Nylon_suture_with_needle-removebg-preview.png', description: '1000pcs at 650' , currentInventory: 10},
  {
    categories: ['new arrivals', 'pippete'], name: 'Micro pippette tips', price: '750', image: '/products/Micropipete_tips_1000_ul-removebg-preview.png', description: 'Eppendorf micropippete tips 1000ml, 500pcs at 750' , currentInventory: 10},
    
  {
    categories: ['new arrivals', 'pippete'], name: 'Micro pippette tips', price: '800', image: '/products/Micropipette_tips_200_ul-removebg-preview.png', description: 'Eppendorf micropippete tips 200ml ,1000pcs at 800' , currentInventory: 10},
    
  ]

inventory.map(i => {
  i.id = uuid()
  return i
})

export default inventory