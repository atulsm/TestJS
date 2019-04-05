const groups = [
  {
    "id": "9cd83618-5885-458a-a93a-c1db2ddb06e9",
    "userId": 15,
    "name": "model1_demo3",
    "createdAt": 1542020008013,
    "updatedAt": 1542020008069,
    "createdBy": {
      "name": "manager@hpe.com",
      "userId": 15
    },
    "lastModifiedBy": {
      "name": "manager@hpe.com",
      "userId": 15
    },
    "modelFilter": {
      "query": {
        "categoryBehavior": {
          "$in": [
            "/Authentication/Verify"
          ]
        },
        "categoryObject": {
          "$in": [
            "/Host/Operating System"
          ]
        },
        "categoryOutcome": {
          "$in": [
            "/Failure"
          ]
        },
        "destinationNtDomain": {
          "$nin": [
            "WORKGROUP",
            "NT SERVICE",
            "NT AUTHORITY",
            ""
          ]
        }
      }
    },
    "sourceTable": "investigation.events",
    "primaryFeature": [
      "destinationUserName",
      "destinationNtDomain",
      "destinationHostName"
    ],
    "status": "INITIALIZED",
    "modelStartPeriod": 1530443939000,
    "modelEndPeriod": 1534939000000,
    "resultTableIds": {}
  },
  {
    "id": "b796c3cf-9d7b-47ef-ad38-07c73792fc55",
    "userId": 15,
    "name": "demo2",
    "createdAt": 1542004774971,
    "updatedAt": 1542019833439,
    "createdBy": {
      "name": "manager@hpe.com",
      "userId": 15
    },
    "lastModifiedBy": {
      "name": "manager@hpe.com",
      "userId": 15
    },
    "sourceTable": "investigation.events",
    "primaryFeature": [
      "eventCount",
      "bytesIn",
      "bytesOut"
    ],
    "status": "SCORING",
    "modelStartPeriod": 1530443939000,
    "modelEndPeriod": 1534763972000,
    "scoringStart": 1534012200000,
    "lastScoringTimeMS": 1534105800000,
    "resultTableIds": {
      "demo2": "e543b528-11e2-4935-aaed-7ad1e4f0c5f4"
    }
  }
];

const first_occurance_models = [
  {
    name: 'First_Success_Login_To_New_Device',
    modelType: 'first_occurance',
    primaryFeature: ['destinationUserName', 'destinationNtDomain', 'destinationHostName'],
    modelFilter: {
      query: {
        categoryObject: {
          $in: ['/Host/OperatingSystem']
        },
        categoryOutcome: {
          $in: ['/Success']
        },
        categoryBehavior: {
          $in: ['/Authentication/Verify']
        },
        destinationNtDomain: {
          $nin: ['WORKGROUP', 'NTSERVICE', 'NTAUTHORITY', '']
        }
      }
    },
    startPeriod: 1530443939000, // TODO
    endPeriod: 1534939000000 // TODO
  }
];

first_occurance_models.map((model) => {
  console.log(groups.filter((group) => {
    return group.name === model.name;
  }).length);
})