from unittest import TestCase
from test_unlicense import run

class TestUnlicense(TestCase):
    def run_exists(self):
        self.assertTrue(run)
