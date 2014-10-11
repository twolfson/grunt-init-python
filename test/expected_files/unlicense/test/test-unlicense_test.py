from unittest import TestCase
from test_unlicense import test_unlicense


class TestRunFunction(TestCase):
    def test_run_exists(self):
        self.assertTrue(bool(test_unlicense.run))
