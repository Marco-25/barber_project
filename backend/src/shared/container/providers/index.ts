import { container } from 'tsyringe';

import IStorageProvider from '@shared/container/providers/StorageProvider/models/IStorageProvider';
import DiscStorageProvider from '@shared/container/providers/StorageProvider/implementations/DiscStorageProvider';

// import IMailProvider from '@shared/container/providers/MailProvider/models/IMailProvider';

container.registerSingleton<IStorageProvider>('StorageProvider', DiscStorageProvider);
