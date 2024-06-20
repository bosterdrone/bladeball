var objc = JSON.parse($response.body);

objc = {
  "user": {
    "id": "12345",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "subscription": {
      "type": "premium",
      "startDate": "2024-06-21",
      "expiryDate": "2025-06-21",
      "autoRenew": true
    }
  },
  "features": {
    "prioritySupport": true,
    "enhancedLanguageModel": true,
    "customizationOptions": {
      "themes": ["light", "dark", "system"],
      "languages": ["English", "Spanish", "French"]
    },
    "advancedTools": {
      "codeCompletion": true,
      "apiAccess": true,
      "browserTool": true,
      "imageInput": true
    },
    "usageLimits": {
      "requestsPerMonth": 50000,
      "concurrentSessions": 5,
      "storage": "100GB"
    }
  },
  "notifications": {
    "email": true,
    "sms": false,
    "push": true
  },
  "billing": {
    "billingCycle": "annual",
    "paymentMethod": "credit_card",
    "lastPaymentDate": "2024-06-21",
    "nextPaymentDate": "2025-06-21",
    "invoiceHistory": [
      {
        "invoiceId": "INV001",
        "date": "2024-06-21",
        "amount": "99.99",
        "currency": "USD",
        "status": "paid"
      }
    ]
  }
};

$done({ body: JSON.stringify(objc) });

