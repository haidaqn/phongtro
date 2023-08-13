import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { OverviewModule } from './overview/overview.module';
import { LabelModule } from './label/label.module';
import { ImagesModule } from './images/images.module';
import { CategoryModule } from './category/category.module';
import { AttributeModule } from './attribute/attribute.module';

@Module({
    imports: [UserModule, PostModule, OverviewModule, LabelModule, ImagesModule, CategoryModule, AttributeModule]
})
export class MainModule {}
