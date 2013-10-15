from unittest import TestCase
from {%= package_name %} import {%= package_name %}


class TestRunFunction(TestCase):
    def test_run_exists(self):
        self.assertTrue(bool({%= package_name %}.run))
