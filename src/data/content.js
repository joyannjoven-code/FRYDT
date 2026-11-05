// All homepage text lives here so components stay presentational.
// Content follows Project Deliverable #1 (FRYDT Laundry Shop proposal).

export const shop = {
  name: 'FRYDT Laundry Shop',
  tagline: 'Laundry Shop Management System',
  hours: '7:30 AM – 5:00 PM, Monday to Sunday',
  contactPerson: 'Mrs. Merlina Azanon (Handler)',
  contactNumber: '09620553867',
  year: 2026,
  branches: [
    {
      name: 'South Centro',
      address: 'South Centro, Sipocot, Camarines Sur',
      note: 'Main branch, open for three years',
    },
    {
      name: 'North Impig',
      address: 'North Impig, Sipocot, Camarines Sur',
      note: 'Newly established branch',
    },
  ],
}

export const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Who use it', href: '#roles' },
  { label: 'How it works', href: '#how' },
  { label: 'Contact', href: '#contact' },
]

export const heroHighlights = ['Orders', 'Payments', 'Inventory', 'Expenses', 'Reports']

export const features = [
  {
    id: 'orders',
    icon: 'orders',
    title: 'Order records',
    summary: 'Log each customer’s laundry with weight, price and the handler who received it.',
    bullets: ['Customer details saved with every order', 'Weight (kg) and price per order', 'Payment amount, method and receipt number'],
    details:
      'Every order is stored in one central database, so a customer’s full history can be found in seconds instead of searching handwritten logbooks.',
  },
  {
    id: 'tracking',
    icon: 'tracking',
    title: 'Order tracking',
    summary: 'Follow each load from drop-off to pick-up so nothing goes unclaimed or runs late.',
    bullets: ['Status from drop-off to pick-up', 'List of unclaimed orders', 'Delayed order monitoring'],
    details:
      'Date received, date completed and status are recorded on every order, which makes unclaimed and delayed orders easy to spot.',
  },
  {
    id: 'inventory',
    icon: 'inventory',
    title: 'Inventory',
    summary: 'Keep count of laundry supplies such as detergent and fabric softener.',
    bullets: ['Item name, quantity and unit cost', 'Supplies used per order', 'Stock levels in one list'],
    details:
      'Handlers update supply quantities as materials are used, so the owner always sees what is left.',
  },
  {
    id: 'expenses',
    icon: 'expenses',
    title: 'Expenses',
    summary: 'The owner records bills, handler salaries and maintenance costs.',
    bullets: ['Expense type, amount and date', 'Notes for each expense', 'Every expense tied to the owner'],
    details:
      'Recording expenses inside the system keeps spending organized and accountable, replacing scattered notes.',
  },
  {
    id: 'reports',
    icon: 'reports',
    title: 'Reports',
    summary: 'The owner reviews organized reports on orders, inventory, payments and expenses.',
    bullets: ['Order and payment summaries', 'Inventory report', 'Expense report'],
    details:
      'Reports are generated from the central records, so the owner no longer has to total figures by hand.',
  },
  {
    id: 'backup',
    icon: 'backup',
    title: 'Backup & recovery',
    summary: 'Protect business records from accidental loss or system failure.',
    bullets: ['Centralized database storage', 'Backup of business records', 'Recovery after a failure'],
    details:
      'Unlike a paper logbook, records can be backed up and restored, so a lost or damaged page no longer means lost data.',
  },
]

export const roles = [
  {
    id: 'owner',
    title: 'Owner',
    description: 'Manages the overall business and monitors how the shop is doing.',
    permissions: [
      'Record and monitor business expenses',
      'Track bills and handler salaries',
      'View reports on orders, inventory and expenses',
    ],
  },
  {
    id: 'handler',
    title: 'Handler',
    description: 'Runs the daily laundry operations at the counter.',
    permissions: [
      'Receive laundry and record customer orders',
      'Record payments collected',
      'Update order status and track supplies',
    ],
  },
]

export const steps = [
  { title: 'Record', text: 'Handlers log orders, payments and supplies. The owner logs expenses.' },
  { title: 'Track', text: 'Order status and stock levels update as laundry moves through the shop.' },
  { title: 'Report', text: 'The owner reviews reports on orders, inventory, payments and expenses.' },
]
