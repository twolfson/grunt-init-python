from unittest import TestCase
from {%= package_name %} import run

class TestRunFunction(TestCase):
    def run_exists(self):
        self.assertTrue(run)
