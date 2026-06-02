import string
class Solution:
    def checkIfPangram(self, sentence: str) -> bool:
        count = 0
        az = string.ascii_lowercase
        s_list = (list(sentence))
        az_dict= dict.fromkeys(az, False)
        for a in s_list:
            if az_dict[a] == False:
                count += 1
                az_dict[a] = True
        if count == 26:
            return True
        return False
