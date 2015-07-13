# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('perma', '0008_auto_20150522_1248'),
    ]

    operations = [
        migrations.AlterField(
            model_name='linkuser',
            name='vesting_org',
            field=models.ManyToManyField(help_text=b'If set, this user is a vesting org member. This should not be set if registrar is set!', related_name='users', null=True, to='perma.VestingOrg', blank=True),
            preserve_default=True,
        ),
    ]
