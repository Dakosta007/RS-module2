import unittest
from my_module import my_function

class MyTest(unittest.TestCase):
    def test_my_function(self):
        self.assertEqual(my_function(2, 3), 5)
