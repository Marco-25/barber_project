import { container } from 'tsyringe';

import IHashProvider from '@modules/users/providers/HasProvider/models/IHashProvider';
import BCryptHashProvider from '@modules/users/providers/HasProvider/implementations/BCryptHashProvider';

container.registerSingleton<IHashProvider>('HashProvider', BCryptHashProvider);

