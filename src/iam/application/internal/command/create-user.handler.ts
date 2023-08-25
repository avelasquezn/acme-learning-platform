import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateUserCommand } from '../../../domain/model/commands/create-user.command';

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
  execute(command: CreateUserCommand): Promise<any> {
    return Promise.resolve(undefined);
  }
}
