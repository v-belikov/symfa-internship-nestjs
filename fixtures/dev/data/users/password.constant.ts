import { Config } from '@core/config';

import * as bcrypt from 'bcrypt';

export const PASSWORD = bcrypt.hashSync(Config.get.defaultPassword, Config.get.hashSalt);
