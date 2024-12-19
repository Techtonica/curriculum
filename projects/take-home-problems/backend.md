# Backend take home exercise

We're building a tool to help protect electricians from experiencing or creating fire hazards during their work in San Francisco.

You can help by building an API to provide some of the data we need to display in our mobile app. You don't need to build any UI but please give curl commands or some example our mobile app developers can use to try using your API.

Use whatever language and frameworks you are most comfortable with. Please include a readme with instructions on how to run your API or a location where we can interact with a running instance to test your work. If there are tests you've written let us know how to run them and if there are other tools you find helpful when working with your API let us know about those as well.

You have 3 hours to complete this challenge and email your repo URL to your Program Manager.

## API

### Contractor's report

We want to show contracts a list of the properties they have worked on which have had fire violations so that they can look out for these or similar hazards on their jobs. Build an API endpoint which accepts the company name of a business and returns a JSON data structure listing the addresses where they have worked with known fire hazards.

- A contractor is assumed to have worked at an address if that contractor has a permit (identified by `Permit Number`) at the same `Location` as a reported fire hazard.

How exactly you structure the response is up to you. We're curious to see what information you think would be useful to a client developer and how you document what is available or otherwise make it easy for the client developer to use.

#### Bonus features

- We don't need to warn electricians about violations at properties they didn't actually work on. Exclude `withdrawn` and `cancelled` permits from the report.
- We don't need to tell electricians about problems which we know were fixed before they started work. Exclude fire violations with a `Close Date` before the `Filed Date` of the contactor's permit.
- For large businesses this could be a very long list of results. Give the client some way to request a limited "page" of results at a time.

### City report

When a city inspector finds a new fire violation they want to know which contractors are working nearby and need to be warned about a potential danger. Build an API endpoint which accepts a `Block` identifier and a date and returns a JSON structure containing contact information for the businesses which have permits on that block.

#### Bonus features

- To help the inspector get a quick estimate of how much work has been done nearby also return the total of the `Permit Valuation`s of all permits issued for that block.
- Inspectors don't care about work done after they spot a problem. Exclude permits with an `Issued Date` after the input date.
- Inspectors don't care about work that has been finished. Exclude permits which are `withdrawn`, `cancelled`, or which have a `Completed Date` before the input date.
- Duplicate results confuse inspectors. If a company have multiple permits in the same block group them together so you only list that company once.

## Data

The raw data for this problem can be downloaded as CSV files from [San Francisco Open Data site](https://datasf.org):

- [Link to Electrical Permits Data](https://data.sfgov.org/Housing-and-Buildings/Electrical-Permits/ftty-kx6y)
- [Link to Electrical Permits Contacts Data](https://data.sfgov.org/Housing-and-Buildings/Electrical-Permits-Contacts/fdm7-jqqf)
- [Link to Fire Violation Data](https://data.sfgov.org/Housing-and-Buildings/Fire-Violations/4zuq-2cbe)

You can build a Postgres database containing the data set by running the commands below. You're free to modify the database schema however you like or use a different database if you prefer.

### Setup

In bash or another shell download the data as csv files:

```sh
curl "https://data.sfgov.org/api/views/ftty-kx6y/rows.csv?accessType=DOWNLOAD" > Electrical_Permits.csv
curl "https://data.sfgov.org/api/views/fdm7-jqqf/rows.csv?accessType=DOWNLOAD" > Electrical_Permits_Contacts.csv
curl "https://data.sfgov.org/api/views/4zuq-2cbe/rows.csv?accessType=DOWNLOAD" > Fire_Violations.csv
```

Run Postgres:

```sh
psql
```

Within Postgres:

```sql
CREATE TABLE permits(
  "Permit Number" TEXT,
  "Application Creation Date" TEXT,
  "Block" TEXT,
  "Lot" TEXT,
  "Street Number" TEXT,
  "Street Number Suffix" TEXT,
  "Street Name" TEXT,
  "Street Suffix" TEXT,
  "Unit" TEXT,
  "Unit Suffix" TEXT,
  "Description" TEXT,
  "Status" TEXT,
  "Filed Date" TEXT,
  "Issued Date" TEXT,
  "Completed Date" TEXT,
  "Permit Valuation" TEXT,
  "Neighborhoods - Analysis Boundaries" TEXT,
  "Supervisor District" TEXT,
  "Zipcode" TEXT,
  "Location" TEXT,
  "SF Find Neighborhoods" TEXT,
  "Current Police Districts" TEXT,
  "Current Supervisor Districts" TEXT,
  "Analysis Neighborhoods" TEXT,
  "Current Police Districts (2)" TEXT,
  "Zip Codes" TEXT,
  "Fire Prevention Districts" TEXT,
  "Supervisor Districts (1)" TEXT
);

CREATE TABLE contacts(
  "Permit Number" TEXT,
  "Contact Type" TEXT,
  "Company Name" TEXT,
  "Street Number" TEXT,
  "Street" TEXT,
  "Street Suffix" TEXT,
  "State" TEXT,
  "Zipcode" TEXT,
  "Phone" TEXT,
  "Phone2" TEXT,
  "License Number" TEXT
);

CREATE TABLE fire_violations(
  "Inspection Number" TEXT,
  "Violation Id" TEXT,
  "Address" TEXT,
  "Battalion" TEXT,
  "Station Area" TEXT,
  "Fire Prevention District" TEXT,
  "Citation Number" TEXT,
  "Close Date" TEXT,
  "Corrective Action" TEXT,
  "Status" TEXT,
  "Violation Item Description" TEXT,
  "Violation Date" TEXT,
  "Violation Number" TEXT,
  "Violation Item" TEXT,
  "Primary" TEXT,
  "Zipcode" TEXT,
  "Neighborhood District" TEXT,
  "Supervisor District" TEXT,
  "Location" TEXT,
  "Neighborhoods 2" TEXT,
  "Supervisor Districts 2" TEXT,
  "Fire Prevention Districts 2" TEXT,
  "Current Police Districts 2" TEXT,
  "Neighborhoods - Analysis Boundaries 2" TEXT,
  "Zip Codes 2" TEXT,
  "Neighborhoods (old) 2" TEXT,
  "Police Districts 2" TEXT,
  "Central Market/Tenderloin Boundary 2" TEXT,
  "Central Market/Tenderloin Boundary Polygon - Updated 2" TEXT,
  "Neighborhoods" TEXT,
  "SF Find Neighborhoods" TEXT,
  "Current Police Districts 3" TEXT,
  "Current Supervisor Districts" TEXT
);
```

Import csv:

```sql
\COPY permits FROM './Electrical_Permits.csv' (FORMAT CSV, HEADER)
\COPY contacts FROM './Electrical_Permits_Contacts.csv' (FORMAT CSV, HEADER)
\COPY fire_violations FROM './Fire_Violations.csv' (FORMAT CSV, HEADER)

quit
```
