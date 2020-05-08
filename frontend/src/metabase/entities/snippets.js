import { t } from "ttag";

import { createEntity } from "metabase/lib/entities";
import validate from "metabase/lib/validate";

export default createEntity({
  name: "snippets",
  nameOne: "snippet",
  path: "/api/native-query-snippet",
  form: {
    fields: [
      {
        name: "content",
        title: t`Enter some SQL here so you can reuse it later`,
        placeholder: t`AND canceled_at IS null\nAND account_type = 'PAID'`,
        type: "text",
        className: "Form-input full text-code",
        rows: 4,
        validate: validate.required().maxLength(10000),
      },
      {
        name: "name",
        title: t`Give your snippet a name`,
        placeholder: t`current customers`,
        validate: validate.required().maxLength(100),
      },
      {
        name: "description",
        title: t`Give it a description (optional)`,
        placeholder: t`Filters accounts to current customers`,
        validate: validate.maxLength(100),
      },
      { name: "database_id", hidden: true },
    ],
  },
});