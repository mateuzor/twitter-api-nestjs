import { Module } from '@nestjs/common';
import { Tweet } from './entities/tweet.entity';
import { TweetsService } from './tweets.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { TweetsController } from './tweets.controller';

@Module({
  imports: [SequelizeModule.forFeature([Tweet])],
  controllers: [TweetsController],
  providers: [TweetsService],
})
export class TweetsModule {}
