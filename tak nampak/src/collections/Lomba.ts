import { CollectionConfig } from "payload/types";

const Lomba: CollectionConfig = {
  slug: "lomba",
  access: {
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
        name: "name",
        label: "Nama",
        type: "text",
        required: true
      },
      {
        name: "email",
        label: "Email",
        type: "email",
        unique: true,
        required: true
      },
      {
        name: "asal_sekolah",
        label: "Asal Sekolah",
        type: "text",
        required: true
      },
      {
        "name": "status",
        "label": "Status",
        "type": "select",
        "options": [
          {
            "label": "Waiting",
            "value": "waiting"
          },
          {
            "label": "Rejected",
            "value": "rejected"
          },
          {
            "label": "Accepted",
            "value": "accepted"
          }
        ],
        "defaultValue": "waiting",
        "required": true
      },
      {
        name: "tanggal_pendaftaran",
        label: "Tanggal Pendaftaran",
        type: "date",
        required: true
      }
    ],
};

export default Lomba;
