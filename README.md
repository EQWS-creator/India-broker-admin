# India Broker — Admin Dashboard Starter

This package is a separate starter interface for the India Broker administration area.

## Included
- `index.html` — admin dashboard page
- `style.css` — responsive admin styling
- `script.js` — demo dashboard data and UI interactions

## Intended structure

The customer-facing website and admin dashboard should remain separate:

```text
India Broker
├── customer site
└── admin dashboard
    ├── authentication
    ├── users
    ├── accounts
    ├── orders
    ├── transactions
    ├── support
    └── settings
```

## Before connecting real services

Do not treat the sample values as real customer, account, balance, KYC, or trading information.

For a production system, add:
1. Secure admin authentication
2. Role-based access control
3. Backend/database
4. Audit logging
5. Server-side validation
6. Secure broker/API integration
7. Protected customer/account data
8. Separate production and demo environments

GitHub Pages can host the interface, but it should not contain private API secrets or be used by itself to authorize real trades.
