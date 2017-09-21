### Fixtures folder
All key API responses are housed here.

These API responses can be used for several reasons.  _E.G._:
* To bypass logins when building any screen of the application
* To quickly test API parsing in unit tests
* To separate Network from Data concerns while coding
### Example
```
{
  "status":400,
  "statusText":null,
  "data": {
    "status": "error",
    "arcode": "LOGIN_NG_001",
    "_error": "Email or Password is invalid."
  }
}
```